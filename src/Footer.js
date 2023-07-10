import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='gray'></div>
        <div className='footer'>
        <div className='color'>Questions? Call <span className='underline'>000-800-919-1694</span></div>
        <div className='flex'>
            <div className='direction'>
            {/* <a className='foot-links pad--bottom' href='#'>Questions? Call <span className='num'>000-800-919-1694</span></a> */}
                <a className='foot-links' target='_blank' href='https://help.netflix.com/support/412'>FAQ</a>
                <a className='foot-links' target='_blank' href='https://media.netflix.com/'>Media Centre</a>
                <a className='foot-links' target='_blank' href='#'>Ways to Watch</a>
                <a className='foot-links' target='_blank' href='#'>Cookie Preferences</a>
                <a className='foot-links' target='_blank' href='https://fast.com'>Speed Test</a>
            </div>
            <div className='direction'>
                <a className='foot-links' target='_blank' href='https://help.netflix.com'>Help Centre</a>
                <a className='foot-links' target='_blank' href='http://ir.netflix.com/'>Investor Relations</a>
                <a className='foot-links' target='_blank' href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a>
                <a className='foot-links' target='_blank' href='https://help.netflix.com/legal/corpinfo'>Corporate Information</a>
                <a className='foot-links' target='_blank' href='https://help.netflix.com/legal/notices'>Legal Notices</a>
            </div>
            <div className='direction'>
                <a className='foot-links' target='_blank' href='#'>Account</a>
                <a className='foot-links' target='_blank' href='https://jobs.netflix.com/jobs'>Jobs</a>
                <a className='foot-links' target='_blank' href='https://help.netflix.com/legal/privacy'>Privacy</a>
                <a className='foot-links' target='_blank' href='https://help.netflix.com/contactus'>Contact Us</a>
                <a className='foot-links' target='_blank' href='https://www.netflix.com/in/browse/genre/839338'>Only on Netflix</a>
            </div>
        </div>
        <div><a className='netflix' href='#'>Netflix India</a></div>
        </div>
    </footer>
  )
}

export default Footer