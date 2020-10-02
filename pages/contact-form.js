import React, { useState, useEffect } from 'react';
import CustomHead from "../../components/partials/head/head";
import 'isomorphic-fetch';
import LayoutMain from "../../components/layouts/layout-main";

export default function ContactForm() {
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => {
               console.log(res);
           })
    });

    return (
        <LayoutMain>
            <CustomHead pageTitle={'Contact Form'} />
            <h1>Hello</h1>
        </LayoutMain>
    )
}