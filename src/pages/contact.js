import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import {RiMailSendFill, RiPhoneLine, RiUserLocationFill} from 'react-icons/ri'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Wrapper, Image,BottomEdgeDown,BottomEdgeUp, Artist} from "./pageStyles/pageStyles"

import { COLORS } from "../constants"

const Contact = () => {
    const {wpcontent:{
    page:{
        contactMeta:{
            contactPageAddress,
              contactPageCity,
              contactPageDescription,
              contactPageEmail,
              contactPagePhone,
              contactPagePicture,
              contactPagePostcode
        }
    }
    }} = useStaticQuery(graphql`
    query  {
        wpcontent {
          page(id: "contact", idType: URI) {
            contactMeta {
              contactPageAddress
              contactPageCity
              contactPageDescription
              contactPageEmail
              contactPagePhone
              contactPagePostcode
              contactPagePicture {
                sourceUrl
                imageFile{
                childImageSharp{
                    fluid(quality: 100){
                    ...GatsbyImageSharpFluid_withWebp
                    }
                     }
                }
                altText
              }
            }
          }
        }
      }
      
    `);
      
    return (
        <Layout>
        <SEO title="Contact"/>
        <Wrapper descriptionColor={COLORS.PRIMARY}>
            <div className="banner">
            <Image 
                fluid={contactPagePicture.imageFile.childImageSharp.fluid}
            />
            <BottomEdgeDown color={COLORS.PRIMARY}/>
            </div>
            <div className="description">
                <h2>Contact Us</h2>
            <p>{contactPageDescription}</p>
            <BottomEdgeUp color={COLORS.BLACK}/>
            </div>

            <div className="contact-info">
                <RiMailSendFill style={{height:'4rem',width:'4rem'}}/>
                <p>Send us an email at {" "}
                <a target="__blank" href={`mailto:${contactPageEmail}`}>
                    {contactPageEmail}   
                </a> </p>
            </div>

            <div>
                <RiPhoneLine style={{height:'4rem',width:'4rem'}}/>
                <p>Call us:{contactPagePhone}
                 </p>
            </div>

            <div>
                <RiUserLocationFill style={{height:'4rem',width:'4rem'}}/>
                <p>{contactPageAddress},{contactPagePostcode} {contactPageCity}</p>
            </div>



        </Wrapper>
        </Layout>
    )
}

export default Contact