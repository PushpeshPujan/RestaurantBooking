import React from 'react';
const Footer=()=>{
    var format = require('date-format');
    format.asString(); //defaults to ISO8601 format and current date.
    const date=new Date();
    
    format.asString(); //defaults to ISO8601 format
    format.asString('yyyy', new Date());
    return(
        <div className="col-12 text-info text-center mb-4">
           Designed By : PUSHPESH PUJAN &copy; {format()}
        </div>
    
    )
}
export default Footer;