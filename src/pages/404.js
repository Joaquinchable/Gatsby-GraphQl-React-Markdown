import React from 'react';
import styles from './404.module.scss';
import Layout from '../components/layout';
import {Link} from 'gatsby'


export default () =>(

<Layout>


<div className={styles.content}>

<h1 className={styles.header}>Page not Found </h1>

<p className={styles.errorMessage}>


the page you are looking for does not exists.


</p>


<Link to='/'>Home</Link>

</div>



</Layout>



);
