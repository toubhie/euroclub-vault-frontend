import React from 'react'
import PageContainer from '../components/PageContainer'

const Page404 = () => {
  return (
        <PageContainer>
            <section id="detail" className="parallax-section" style={{ minHeight: '50vh' }}>
                <div className="container">
                    <div className="row mt-6 mb-5">
                        <div className="wow fadeInLeft col-12" data-wow-delay="0.3s">
                            <i className="fa fa-info-circle"></i>
                            <h2 className='mt-2'>Page Not Found</h2>
                        </div>

                    </div>
                </div>
            </section>
        </PageContainer>
    )
}

export default Page404