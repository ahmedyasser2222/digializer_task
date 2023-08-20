import React from 'react'
import HeadSection from '../../components/HeadSection'
import EmployeeCard from "../../components/EmployeeCard"
import Container from '../../components/Container'

const Section4 = () => {
  return (
    <div className='sec-4'>
         <HeadSection text="Meet the Team" />
         <Container>
         <div className="cards-emplyee flex justify-between items-center flex-wrap gap-y-5 ">
             <EmployeeCard name="team-member-name" desc="Associate Director " img="https://ahmedyasser2222.github.io/elearning/img/team-1.jpg" />
             <EmployeeCard name="Thomas Poulson" desc="Leasing Director" img="https://ahmedyasser2222.github.io/elearning/img/team-2.jpg" />
             <EmployeeCard name="Callum Fletcher" desc="Senior Dubai Hills Estate Consultant" img="https://ahmedyasser2222.github.io/elearning/img/team-3.jpg" />
             <EmployeeCard name="Laura Davies " desc="Senior Dubai Hills Estate Consultant" img="https://ahmedyasser2222.github.io/elearning/img/team-4.jpg" />
         </div>
         </Container>
    </div>
  )
}

export default Section4