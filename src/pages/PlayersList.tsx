import { Button, CircularProgress, Dialog, DialogActions, DialogContent, Divider, Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageContainer from '../components/PageContainer'
import { getAllPlayers, createPlayer, updatePlayer, getAllPlayerPositions } from '../api/system'
import { Formik, Form } from 'formik'
import { useSnackbar } from 'notistack'
import { DataGrid } from '@mui/x-data-grid'
import TextInput from '../components/common/TextInput'
import SelectInput from '../components/common/SelectInput'
import { Edit, AssignmentOutlined, DeleteOutline, TaskAltOutlined, PersonAddAlt } from '@mui/icons-material'
import PlayerContainer from '../components/PlayerContainer'
import PlayerDetailModal from '../components/PlayerDetailModal'
//import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import countriesData from '../util/countries.json';

const PlayersList = () => {
    const [ showModal, setShowModal ] = useState(false)
    const [ deleteModal, setShowDeleteModal ] = useState(false)
    const [ doneModal, setShowDoneModal ] = useState(false)
    const [ selectedPlayer, setSelectedPlayer ] = useState(null);
    const [ players, setPlayers ] = useState([]);
    const [ playerPositions, setPlayerPositions ] = useState([]);

    const { enqueueSnackbar } = useSnackbar();
    const [ processing, setProcessing ] = useState(false)

    const defaultPlayer = {
        fullname: "", club: "", position: "", nationality: "", age: "", player_value: ""}


    const [prices, setPrices] = useState({ min: null, max: null });
    const [searchText, setSearchText] = useState('');

    const countryOptions = Object.entries(countriesData).map(([code, label]) => ({
        code,
        label,
      }));

  //  const {name: categoryName} = categories.find(({id}) => id === activeCategoryId) || {};


    const init = async () => {
        try {
            setProcessing(true)
            const playersData: any = await getAllPlayers();

            const playerPositionsData: any = await getAllPlayerPositions();

            console.log("playersData", playersData);
            setPlayers(playersData?.data || [])

            console.log("playerPositionsData", playerPositionsData);
            setPlayerPositions(playerPositionsData?.data || [])
        }
        catch (err) {
            enqueueSnackbar(err?.message || err?.responseMessage || 'An error occurred', { variant: 'error' })
        }
        finally {
            setProcessing(false)
        }
    }

    const createOrUpdatePlayer = async (values, { resetForm }) => {
        console.log('values', values)
        try {
            const resp = values?.id ? await updatePlayer(values?.id, values) : await createPlayer(values);
            init();
            setSelectedPlayer(null)
            setShowModal(false)
            enqueueSnackbar('Action performed successfully')
        }
        catch (err) {
            enqueueSnackbar(err?.message || err?.responseMessage || 'An error occurred', { variant: 'error' })
        }
    }

    // const deleteAction = async (values, { resetForm }) => {
    //     try {
    //         const resp = await deleteTask(values.id);
    //         init();
    //         setShowDeleteModal(null)
    //         setShowModal(false)
    //         enqueueSnackbar('Task Deleted Successfully')
    //     }
    //     catch (err) {
    //         enqueueSnackbar(err?.message || err?.responseMessage || 'An error occurred', { variant: 'error' })
    //     }
    // }

    useEffect(() => {
        init()
    }, [])

    console.log('playerPositions', playerPositions)

    return (
        <PageContainer pageTitle='All Players' processing={processing}>
            <section className="inner-banner parallax-section">
                <div className='overlay'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                {/* <h3 className="wow bounceIn" data-wow-delay="0.9s">All</h3> */}
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


                        <PlayerContainer
          positions={playerPositions}
          players={players}
          categoryName={'cat'}
          setPrices={setPrices}
        />
        {/* {modalOpen && activePlayer ? (
          <PlayerDetailModal player={activePlayer} dispatch={dispatch} />
        ) : null} */}

                        {/* <div className='col-12 mt-4'>
                            <div style={{ height: 400, width: '100%', textAlign: 'center' }}>
                                <DataGrid 
                                    className=''
                                    columns={columns}
                                    getRowId={row => row.id}
                                    rows={records}
                                    checkboxSelection={false}
                                    disableSelectionOnClick
                                />
                            </div>
                        </div> */}
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
                                        {/* <TextInput id="club" multiline minRows={2} required label="Description" customChange={undefined} /> */}
                                        <TextInput id="club" required label="Club" customChange={undefined} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <SelectInput id="nationality" field="code" fieldDisplay="label" required label="Nationality" options={ countryOptions } error={undefined} customChange={undefined} readOnly={undefined} selectFunction={undefined} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <SelectInput id="position" field="id" fieldDisplay="description" required label="Player position" options={ playerPositions } error={undefined} customChange={undefined} readOnly={undefined} selectFunction={undefined} />
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
                                <Button disabled={isSubmitting} onClick={() => { if(!isSubmitting) { setShowModal(false); setSelectedPlayer(null) }}} color="secondary" variant="contained" >Cancel</Button>
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

            {/* <Dialog open={deleteModal} maxWidth="lg">
                <Formik enableReinitialize initialValues={selectedPlayer} onSubmit={deleteAction}>
                    {({ isSubmitting, values }) => (
                        <Form>
                            <DialogContent className='pl-4 pr-4'>
                                <h3 className='text-bold mt-05' style={{ color: 'brown'}} >Delete Task</h3>
                                <Divider className="mt-05 mb-2" />
                                <Grid>
                                    <p>Kindly confirm deletion of task below:</p>
                                    <p><b>Name:</b> {values?.name}</p>
                                    <p><b>Description:</b> {values?.description}</p>
                                    <p><b>Priority:</b> {values?.priority}</p>
                                    <p><b>Start Date:</b> {values?.startDate}</p>
                                    <p><b>Due Date:</b> {values?.dueDate}</p>
                                    <p><b>Assigned To:</b> {values?.assignedTo}</p>
                                </Grid>
                            </DialogContent>
                            <DialogActions className='pr-3 pb-3'>
                                <Button disabled={isSubmitting} onClick={() => { if(!isSubmitting) { setShowDeleteModal(false); setSelectedPlayer(null) }}} color="secondary" variant="contained" >Cancel</Button>
                                <Button type='submit' variant="contained" disabled={isSubmitting} color="error">
                                    {
                                        isSubmitting ?
                                        <CircularProgress size={15} color="inherit" />
                                        :
                                        `Delete Task`
                                    }
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>

            <Dialog open={doneModal} maxWidth="lg">
                <Formik enableReinitialize initialValues={selectedPlayer} onSubmit={deleteAction}>
                    {({ isSubmitting, values }) => (
                        <Form>
                            <DialogContent className='pl-4 pr-4'>
                                <h3 className='text-bold mt-05 text-primary'>Mark Task As Done</h3>
                                <Divider className="mt-05 mb-2" />
                                <Grid>
                                    <p>Kindly confirm completion of task below:</p>
                                    <p><b>Name:</b> {values?.name}</p>
                                    <p><b>Description:</b> {values?.description}</p>
                                    <p><b>Priority:</b> {values?.priority}</p>
                                    <p><b>Start Date:</b> {values?.startDate}</p>
                                    <p><b>Due Date:</b> {values?.dueDate}</p>
                                    <p><b>Assigned To:</b> {values?.assignedTo}</p>
                                </Grid>
                            </DialogContent>
                            <DialogActions className='pr-3 pb-3'>
                                <Button disabled={isSubmitting} onClick={() => { if(!isSubmitting) { setShowDoneModal(false); setSelectedPlayer(null) }}} color="secondary" variant="contained" >Cancel</Button>
                                <Button type='submit' variant="contained" disabled={isSubmitting}>
                                    {
                                        isSubmitting ?
                                        <CircularProgress size={15} color="inherit" />
                                        :
                                        `Complete Task`
                                    }
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog> */}
        </PageContainer>
    )
}

export default PlayersList;