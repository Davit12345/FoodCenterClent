import React, {Component} from 'react';
import Header from './conteners/Header'
import Content from './conteners/Content'
import Footer from './conteners/Footer'


class Home extends Component {


    render() {


        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>

            </div>

        );

    }
}

export default Home;