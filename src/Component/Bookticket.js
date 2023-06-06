import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const Bookticket = () => {

    let Nav = useNavigate();
    let [data, setData] = useState([]);
    let [active, setactive] = useState(true)

    let { id } = useParams();

    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/movie/' + id, {
            }).then(res => {
                res.json().then(record => {
                    let datarecord = [record]
                    setData(datarecord);
                    setactive(false)
                })
                    .catch(err => {
                        console.log(err);
                    })

            }).catch(err => { console.log(err) })
        }
    }, [data])


    return (
        <div>
            {data.map((v, i) => {
                return (
                    <div>
                        <div className='p-3' style={{backgroundColor:"#1f2533"}}>
                            <div className='container'> 
                                <div className='booking'>
                                    <span className='fs-4 '>{v.title}</span> 
                                </div>
                            </div>
                        </div>
                        <div className='back-btn'>
                            <div className='d-flex'>
                                <button className='show'>
                                    <p className='m-0'>01:20 PM</p>
                                    <p className='m-0'>DOLB 7.1</p>
                                </button>
                                <button className='show'>
                                    <p className='m-0'>04:20 PM</p>
                                    <p className='m-0'>DOLB 7.1</p>
                                </button>
                                <button className='show'>
                                    <p className='m-0'>08:20 PM</p>
                                    <p className='m-0'>DOLB 7.1</p>
                                </button>
                                <button className='show'>
                                    <p className='m-0'>08:20 PM</p>
                                    <p className='m-0'>DOLB 7.1</p>
                                </button>
                                <button className='show'>
                                    <p className='m-0'>08:20 PM</p>
                                    <p className='m-0'>DOLB 7.1</p>
                                </button>
                            </div>
                        </div>
                        
                        <div className='container'>
                            <div className='text-start py-2'>
                                IMPERIAL-Rs. 390.00
                            </div>
                            <div className='d-flex seat-1'>
                                <span>A</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                                <a href='#'>19</a>
                                <a href='#'>20</a>
                                <a href='#'>21</a>
                                <a href='#'>22</a>
                            </div>
                            <div className='d-flex seat-1'>
                                <span>B</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                            </div>
                            <div className='text-start py-2'>
                                GOLD-Rs. 180.00
                            </div>
                            <div className='d-flex seat-1'>
                                <span>C</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                            </div>
                            <div className='d-flex seat-1'>
                                <span>D</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                            </div>
                            <div className='d-flex seat-1'>
                                <span>E</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                            </div>
                            <div className='d-flex seat-1'>
                                <span>F</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                            </div>
                            <div className='d-flex seat-1'>
                                <span>G</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                            </div>
                            <div className='text-start py-2'> 
                                SILVER-Rs. 160.00
                            </div>
                            <div className='d-flex seat-1'>
                                <span>H</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>
                            </div>
                            <div className='d-flex seat-1'>
                                <span>I</span>
                                <a href='#'>01</a>
                                <a href='#'>02</a>
                                <a href='#'>03</a>
                                <div className='gap-1'>
                                    <a href=''>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>04</a>
                                <a href='#'>05</a>
                                <a href='#'>06</a>
                                <a href='#'>07</a>
                                <a href='#'>08</a>
                                <a href='#'>09</a>
                                <a href='#'>10</a>
                                <a href='#'>11</a>
                                <a href='#'>12</a>
                                <a href='#'>13</a>
                                <a href='#'>14</a>
                                <div className='gap-1'>
                                    <a href='#'>2D</a>
                                    <a href='#'>2D</a>
                                </div>
                                <a href='#'>15</a>
                                <a href='#'>16</a>
                                <a href='#'>17</a>
                                <a href='#'>18</a>  
                            </div>
                        </div>
                    </div>
                    
                    
                );
            })}
        </div>
    )
}

export default Bookticket;
