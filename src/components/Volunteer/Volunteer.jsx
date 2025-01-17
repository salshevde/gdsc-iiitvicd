import React from "react";
import image_bg from "/LeadsBackground.png";
import "../Leads/Leads.scss";
import {VolunteerDB} from "./VolunteerDB";
import PeopleCard from "../PeopleCard/PeopleCard";
import gdsc_lead_photo from "/leadsPhoto.png";

const Volunteer = () => {
    return (
        <div className={"Leads"}>
            <div className={"bg-leads-intro"}>
                <h1>Meet The Volunteer</h1>
                <p>
                    "Volunteers, together, we're like the dream team crafting excellence, all about that collaborative vibe that keeps us going. Our journey as volunteers is like our superpower, fueling growth and making our mark as a testament to what we can achieve when we dream big together." 
                </p>
            </div>
            <div className={"bg-leads"}>
                <div className={'bg-leads-inner'}>
                    <div className={'gdsc-lead-container'}>
                        <h2>GDSC Lead 2023</h2>
                        <div className={"gdsc-lead"}>
                            <PeopleCard
                                image={gdsc_lead_photo}
                                name="Ved Vekhande"
                                domain="GDSC Lead"
                                contact={{github: '/link', linkedin: '/link'}}
                                index={0}
                            />
                        </div>
                    </div>
                    <div className={'domain-leads-container'}>
                        <h2>Vounteer</h2>
                        <div className={"domain-leads"}>
                            {VolunteerDB.map((Lead, index) => (
                                <PeopleCard key={index} {...Lead} index={index % 4}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Volunteer;
