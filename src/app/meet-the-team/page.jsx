import React from 'react'
import  staffimg  from "../../../public/htetsu.jpg";
import Image from "next/image";
import Menu from '@/Components/menu/Menu';
import FooterCurve from '@/Components/FooterCurve';
import Footer from '@/Components/footer/Footer';
import MeetTeamComponent from '@/Components/meetteamComponent'
export default function MeetTheTeam() {
  return (
    <>
    <Menu/>
    <MeetTeamComponent/>


    <FooterCurve/>
<Footer/>
    </>
  )
}
