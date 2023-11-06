import React, { useEffect, useState } from 'react'
import { Autocomplete, Button, CircularProgress, Dialog, DialogActions, DialogContent, Divider, Grid, IconButton, TextField } from '@mui/material'
import PageContainer from '../components/PageContainer'
import { getAllPlayers, createPlayer, updatePlayer, getAllPlayerPositions, getWikiInfoForPlayer, deletePlayer, filterPlayers } from '../api/apis'
import { Formik, Form } from 'formik'
import { useSnackbar } from 'notistack'
import { DataGrid } from '@mui/x-data-grid'
import TextInput from '../components/common/TextInput'
import SelectInput from '../components/common/SelectInput'
import { Edit, DeleteOutline, PersonAddAlt, Visibility } from '@mui/icons-material'
import countriesData from '../util/countries.json';
import moment from 'moment'
import { formatCurrency, renderHTML } from '../util/helpers'
import { PlayerData } from '../interfaces/PlayerData'

const PlayersList = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [showModal, setShowModal] = useState(false)
    const [deleteModal, setShowDeleteModal] = useState(false)
    const [viewPlayerModal, setViewPlayerModal] = useState(false)
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [players, setPlayers] = useState([]);
    const [playerPositions, setPlayerPositions] = useState([]);
    const [playerWikiInfo, setPlayerWikiInfo] = useState({
        title: "",
        extract: "",
        imageUrl: ""
    });
    const [sortModel, setSortModel] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [filteredRows, setFilteredRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false)

    const defaultPlayer = {
        fullname: "", club: "", position: "", nationality: "", age: "", player_value: ""
    }
    const countryOptions = Object.entries(countriesData).map(([code, label]) => ({
        code,
        label,
    }));

    const columns = [
        {
            field: 'sn', headerName: 'S/N', width: 50, sortable: false,
            renderCell: (params) => (
                <p
                    style={{ margin: 'auto' }}
                >
                    {params.api.getRowIndex(params?.row?.id) + 1}
                </p>
            )
        },
        { field: 'fullname', headerName: 'Full name', width: 300 },
        { field: 'club', headerName: 'Club', width: 250 },
        { field: 'position', headerName: 'Position', width: 100 },
        { field: 'nationality', headerName: 'Nationality', width: 300 },
        { field: 'player_value', headerName: 'Player value', width: 200 },
        { field: 'created_at', headerName: 'Date Created', width: 200 },

        {
            field: 'actions', headerName: 'Actions', width: 150, sortable: false,
            renderCell: (params) => (
                <div className='action-icons' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', padding: '0 0.5rem' }}>
                    <IconButton
                        size='small'
                        color="primary"
                        title='View Player' className='p-0 m-0'
                        onClick={async () => {
                            const wikiData: any = await getWikiInfoForPlayer(params?.row?.fullname);

                            if (wikiData?.data) {
                                setPlayerWikiInfo({
                                    title: wikiData?.data?.title,
                                    extract: wikiData?.data?.extract,
                                    imageUrl: wikiData?.data?.imageUrl
                                });
                            } else {
                                setPlayerWikiInfo(null);
                            }

                            setSelectedPlayer(params?.row || defaultPlayer);
                            setViewPlayerModal(true)
                        }}
                    >
                        <Visibility />
                    </IconButton>
                    <IconButton
                        size='small'
                        color="info"
                        title='Edit Player' className='p-0 m-0'
                        onClick={() => {
                            setSelectedPlayer(params?.row || defaultPlayer);
                            setShowModal(true)
                        }}
                    >
                        <Edit />
                    </IconButton>
                    <IconButton
                        size='small'
                        color="error"
                        title='Delete Player' className='p-0 m-0'
                        onClick={() => {
                            setSelectedPlayer(params?.row || defaultPlayer);
                            setShowDeleteModal(true)
                        }}
                    >
                        <DeleteOutline />
                    </IconButton>
                </div>
            )
        },
    ];


    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        try {
            setProcessing(true)
            const playersData: any = await getAllPlayers();

            const playerPositionsData: any = await getAllPlayerPositions();

            setPlayers(formatData(playersData?.data) || []);
            setPlayerPositions(playerPositionsData?.data || []);
        }
        catch (err) {
            enqueueSnackbar(err?.message || err?.responseMessage || 'An error occurred', { variant: 'error' })
        }
        finally {
            setProcessing(false)
        }
    }

    const formatData = (players: PlayerData[]) => {
        return players.map((player) => {
          const formattedPlayer = { ...player };
          formattedPlayer.player_value = formatCurrency(Number(player?.player_value));
          formattedPlayer.created_at = moment(player?.created_at).format('LL');
          return formattedPlayer;
        });
      };

    const createOrUpdatePlayer = async (values: any) => {
        try {
            const response = values?.id ? await updatePlayer(values?.id, values) : await createPlayer(values);

            if (response) {
                init();
                setSelectedPlayer(null)
                setShowModal(false)
                enqueueSnackbar(values?.id ? 'Player information updated successfully' : 'Player created successfully')
            }

        }
        catch (err) {
            enqueueSnackbar(err?.message || err?.responseMessage || 'An error occurred', { variant: 'error' })
        }
    }

    const deleteAction = async (values: any) => {
        try {
            const resp = await deletePlayer(values.id);
            init();
            setShowDeleteModal(null)
            setShowModal(false)
            enqueueSnackbar('Player Deleted Successfully')
        }
        catch (err) {
            enqueueSnackbar(err?.message || err?.responseMessage || 'An error occurred', { variant: 'error' })
        }
    }

    const handleSortAsc = () => {
        setSortModel([{ field: 'fullname', sort: 'asc' }]);
    };

    const handleSortDesc = () => {
        setSortModel([{ field: 'fullname', sort: 'desc' }]);
    };

    const handlePositionChange = (event, newValue) => {
        setSelectedPosition(newValue);
    };

    const handleFilterClick = async () => {
        try {
            const selectedPositionsName = selectedPosition?.map((position) => position?.name);
            const response = await filterPlayers({ positions: selectedPositionsName });

            setPlayers(response?.data || []);
        } catch (error) {
          console.error(error);
        }
      };

    const handleClearFilterClick = async () => {
        setSelectedPosition(null);

        init();
    }
    
    return (
        <PageContainer pageTitle='All Players' processing={processing}>
            <section className="inner-banner parallax-section">
                <div className='overlay'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <h1 className="wow fadeInUp text-uppercase conference mb-05 mt-05" data-wow-delay="0.5s">All Players</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="services-area section-padding pt-3">
                <div className="container">
                    <div className="row">
                        <div className='col-12 text-align-right'>
                            <Button startIcon={<PersonAddAlt />} variant="contained" onClick={() => { setSelectedPlayer(defaultPlayer); setShowModal(true) }}>Create Player</Button>
                        </div>

                        <div className='col-12 mt-4'>

                            <div style={{ display: 'flex', marginBottom: 20 }}>
                                <div style={{ flex: '30%', marginRight: '5px' }}>
                                    <Button variant="outlined" onClick={handleSortAsc} style={{ marginRight: 20 }}>Sort Asc</Button>
                                    <Button variant="outlined" onClick={handleSortDesc}>Sort Desc</Button>
                                </div>

                                <div style={{ flex: '80%', display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: '80%' }}>
                                        <Autocomplete
                                            options={playerPositions || []}
                                            getOptionLabel={(option) => option.description}
                                            onChange={handlePositionChange}
                                            multiple
                                            id="tags-outlined"
                                            filterSelectedOptions
                                            renderInput={(params) => <TextField {...params} label="Filter by Position" variant="outlined" />}
                                        />
                                    </div>
                                    <div style={{ flex: '20%', marginLeft: 20 }}>
                                        <Button variant="contained" onClick={handleFilterClick}>Filter</Button>
                                        <Button onClick={handleClearFilterClick}>Clear Filter</Button>
                                    </div>
                                </div>
                            </div>


                            <div style={{ height: 700, width: '100%', textAlign: 'center' }}>
                                <DataGrid
                                    className=''
                                    columns={columns}
                                    getRowId={row => row.id}
                                    rows={players}
                                    checkboxSelection={false}
                                    disableSelectionOnClick

                                    sortModel={sortModel}
                                    onSortModelChange={(model) => setSortModel(model)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={showModal} maxWidth="lg">
                <Formik enableReinitialize initialValues={selectedPlayer} onSubmit={createOrUpdatePlayer}>
                    {({ isSubmitting, values }) => (
                        <Form>
                            <DialogContent className='pl-4 pr-4'>
                                <h3 className='text-bold mt-05' >{values?.id ? 'Update' : 'Create'} Player</h3>
                                <Divider className="mt-05 mb-2" />
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextInput id="fullname" required label="Full name" customChange={undefined} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput id="club" required label="Club" customChange={undefined} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <SelectInput id="nationality" field="label" fieldDisplay="label" required label="Nationality" options={countryOptions} error={undefined} customChange={undefined} readOnly={undefined} selectFunction={undefined} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <SelectInput id="position" field="name" fieldDisplay="description" required label="Player position" options={playerPositions} error={undefined} customChange={undefined} readOnly={undefined} selectFunction={undefined} />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextInput id="age" required label="Age" customChange={undefined} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput id="player_value" required label="Player value" customChange={undefined} />
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions className='pr-3 pb-3'>
                                <Button disabled={isSubmitting} onClick={() => { if (!isSubmitting) { setShowModal(false); setSelectedPlayer(null) } }} color="secondary" variant="contained" >Cancel</Button>
                                <Button type='submit' variant="contained" disabled={isSubmitting} >
                                    {
                                        isSubmitting ?
                                            <CircularProgress size={15} color="inherit" />
                                            :
                                            `${values?.id ? 'Update' : 'Add'} Player`
                                    }
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>

            <Dialog open={deleteModal} maxWidth="lg">
                <Formik enableReinitialize initialValues={selectedPlayer} onSubmit={deleteAction}>
                    {({ isSubmitting, values }) => (
                        <Form>
                            <DialogContent className='pl-4 pr-4'>
                                <h3 className='text-bold mt-05' style={{ color: 'brown'}} >Delete Player</h3>
                                <Divider className="mt-05 mb-2" />
                
                                <p>Are you sure you want to delete the player: <b>{ selectedPlayer?.fullname }</b></p>                       
                            </DialogContent>
                            <DialogActions className='pr-3 pb-3'>
                                <Button disabled={isSubmitting} onClick={() => { if(!isSubmitting) { setShowDeleteModal(false); setSelectedPlayer(null) }}} color="secondary" variant="contained" >Cancel</Button>
                                <Button type='submit' variant="contained" disabled={isSubmitting} color="error">
                                    {
                                        isSubmitting ?
                                        <CircularProgress size={15} color="inherit" />
                                        :
                                        `Delete Player`
                                    }
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>

            <Dialog open={viewPlayerModal} maxWidth="lg">
                <DialogContent className='pl-4 pr-4'>
                    <h3 className='text-bold mt-05 text-primary'>{ selectedPlayer?.fullname?.toUpperCase() }</h3>
                    <Divider className="mt-05 mb-2" />

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={ playerWikiInfo?.imageUrl || '' } alt={ selectedPlayer?.fullname } style={{ height: '300px', width: '300px', marginRight: '30px' }} />

                        <Grid>
                            <p><b>Full Name:</b> { selectedPlayer?.fullname }</p>
                            <p><b>Club:</b> { selectedPlayer?.club }</p>
                            <p><b>Nationality:</b> { selectedPlayer?.nationality }</p>
                            <p><b>Position:</b> { selectedPlayer?.position }</p>
                            <p><b>Player Value:</b> { formatCurrency(Number(selectedPlayer?.player_value)) || 0 }</p>
                            <p><b>Date Created:</b> { moment(selectedPlayer?.created_at).format('LL') }</p>
                        </Grid>
                    </div>

                    <Divider className="mt-05 mb-2" />

                    <h4 className='mt-05 text-primary'>Other information from Wikipedia: </h4>

                    <div dangerouslySetInnerHTML={ renderHTML(playerWikiInfo?.extract) } />
                </DialogContent>

                <DialogActions className='pr-3 pb-3'>
                    <Button onClick={() => setViewPlayerModal(false)} color="secondary" variant="contained" >Close</Button>
                </DialogActions>

            </Dialog>
        </PageContainer>
    )
}

export default PlayersList;