import React from 'react';
import EventPage from './EventsPage';
import CategoryPage from './CategoriesPage';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import { Category } from '../Components/Category';

const DashboardPage = () => (
  
    
  
  <section className="Board">
    
    <h1 className="dashTitle">Dashboard</h1>
    <p className="dashPar">This is the dashboard.</p>
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