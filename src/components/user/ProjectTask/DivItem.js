import React, {Component} from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

class DivItem extends Component {
    render() {

        return (

            <div>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    {this.props.item}
                </InfiniteCarousel>
            </div>
        );
    }
}

export default DivItem;
