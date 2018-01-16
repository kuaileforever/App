import React, { Component } from 'react';


module.exports = {
    uploadImage: function(url,formData,successCallBack,failCallBack){
        fetch(url,{
            method:'POST',
            header:{
                'Content-Type':'multipart/form-data',
                'x-access-token':'',
            },
            body:formData,
        })
            .then((response)=>response.text())
            .then((result)=>successCallBack(JSON.parse(result)))
            .catch((error)=>failCallBack(error))
    }


}
