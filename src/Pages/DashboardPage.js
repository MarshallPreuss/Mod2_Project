import React from 'react';
import EventPage from './EventsPage';
import CategoryPage from './CategoriesPage';

const DashboardPage = () => (
  
    
  
  <section className="Board">
    
    <h1 className="dashTitle">Natural Disasters</h1>
    <p className="dashPar">This is application allows you to find sources on certain events.</p>
    <br/>
    <table>
      <tr>
        <td className="halfPage titleOnly">
          <CategoryPage/>
        </td>
        <td className="halfPage">
          <EventPage />
        </td>
      </tr>
    </table>
    
  </section>
)
export default DashboardPage