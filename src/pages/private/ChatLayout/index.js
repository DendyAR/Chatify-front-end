import {List, Filter, Menu, Message} from './Component'
import React from 'react'

const Chatlist=()=>{
    return (
        <section className="container-fluid">
            <div className="row">
                <aside className="col-sm-5 d-block col-md-5 col-lg-3 px-4 bg-white">
                    <div className="d-flex align-items-center mt-4 mb-3">
                        <span className="text-purple flex-grow-1 text-start" id="chatify"><h4>Chatify</h4></span>
                        <Menu/>
                        <div className="ps-0 float-md-end"><img src={process.env.PUBLIC_URL + '/images/i_menu.svg'} alt="..." /></div>
                    </div>
                    <div className="d-flex align-items-center m-1">
                        <div className="input-group w-100 h-100">
                            <img src={process.env.PUBLIC_URL + '/images/i_search.svg'} className="input-group-text search-box icon bg-light img-fluid" id="basic-addon1" alt="..." />
                            <input type="text" className="form-control search-box field bg-light " placeholder="Type your message..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="ms-3 float-md-end"><img src={process.env.PUBLIC_URL + '/images/i_plus.svg'} alt="..." /></div>
                    </div>
                    <Filter/>
                    <List />
                </aside>
                <main className="d-none d-sm-block col-sm-7 col-md-7 col-lg-9 col-xs-9 p-0">
                    <Message/>
                </main>
            </div>
        </section>
    )
}

export default Chatlist