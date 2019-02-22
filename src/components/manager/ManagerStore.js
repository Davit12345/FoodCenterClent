import React, {Component} from 'react';
import  { post } from 'axios';

class ManagerStore extends Component {
    // state = {
    //     selecteFild: null
    // }
    // fileSelectedHandler = e => {
    //     this.setState({
    //         selecteFild: e.target.files[0]
    //
    //     })
    // }
    //
    //
    // render() {
    //
    //     return (
    //         <div>
    //
    //             <input type="file" onChange={this.fileSelectedHandler}/>
    //
    //         </div>
    //     );
    // }
    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }

    fileUpload(file){
        const url = 'http://localhost:9494/upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ManagerStore;