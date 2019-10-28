import React,{Component} from 'react'
import Constants from '../Constants'

export default class Message {
    static Id = null;
    static Title = null;
    static Body = null;
    static UserId = null;

    static async getUserInbox(u_id) {
        /*
        let response = await fetch(Constants.IP_ADDRESS+'/user/john/123');
        let body = await response.json();
        console.log(body);
        return {
            Id: body[0].username,
            Title: body[0].password
        };*/

        await fetch(Constants.IP_ADDRESS+'/site')
    .then(response => response.json())
    .then(sites => Id=sites)

    //console.log(Id);
    return Id;
    };

    
}
