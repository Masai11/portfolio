import React from 'react';
import "./footer.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CDBFooter, CDBFooterLink, CDBBtn,CDBBox, CDBIcon,} from 'cdbreact';

const Footer = () => {
  return (
    
    <CDBFooter className="shadow footer" >
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox >
            
              
              <span className="h3 mb-4 " style={{ fontWeight: '600', textDecoration:'none', }}>R.M</span>
            
            <p className="my-3" style={{ width: '250px', fontSize:"larger",textAlign:'start' }}>
            PoeQuotes is a website that provides quotes and inspirational messages from the greatest thinkers, writers, and scientists.
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h3 mb-4" style={{ fontWeight: '600' }}>
              Important Links
            </p>
            <CDBBox flex="column" display="flex"  textAlign="start" style={{ cursor: 'pointer', padding: '0',alignItems:"flex-start",  }}>
              <CDBFooterLink href="/" style={{ fontSize:"larger",}}>Home</CDBFooterLink>
              <CDBFooterLink href="/" style={{ fontSize:"larger",}}>Poems</CDBFooterLink>
              <CDBFooterLink href="/" style={{ fontSize:"larger",}}>Inspirations</CDBFooterLink>
              <CDBFooterLink href="/" style={{ fontSize:"larger",}}>Categories</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h3 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/" style={{ fontSize:"larger",}}>Support</CDBFooterLink>
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h3 mb-4" style={{ fontWeight: '600' }}>
              Contact
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0', alignItems:"flex-start",}}>
              <CDBFooterLink href="https://github.com/Masai11" style={{ fontSize:"larger",}}>Name: Roy Masai</CDBFooterLink>
              <CDBFooterLink href="https://github.com/Masai11" style={{ fontSize:"larger",}}>Email: roymasai001@gmail.com</CDBFooterLink>
             
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn href="https://www.facebook.com/"  className="p-2"  style={{backgroundColor:"#3B5999"}}>
            <CDBIcon fab icon="facebook-f"size="lg" style={{color:"#FFFFFF"}}/>
          </CDBBtn>
          <CDBBtn href="https://twitter.com/" className="mx-3 p-2" style={{backgroundColor:"#4E97E8"}} >
            <CDBIcon fab icon="twitter" size="lg" style={{color:"#FFFFFF"}}/>
          </CDBBtn>
          <CDBBtn href="https://www.instagram.com/"  className="p-2" style={{backgroundColor:"#E4405F"}}>
            <CDBIcon fab icon="instagram" size="lg" style={{color:"#FFFFFF"}}/>
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5" style={{ fontWeight: 'Bold' }}>&copy; R.M, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer