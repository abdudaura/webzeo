import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LanguageProvider } from './lib/i18n/LanguageContext'
import MainLayout from './components/layout/MainLayout'
import ChatLayout from './components/layout/ChatLayout'
import HomePage from './features/home/HomePage'
import ChatHomePage from './features/chat/ChatHomePage'
import SignInPage from './features/auth/SignInPage';
import SignUpPage from './features/auth/SignUpPage';
import AgentDashboard from './features/dashboard/AgentDashboard';
import AIJournalistChat from './features/reports/AIJournalistChat';
import StateReportBrowser from './features/reports/StateReportBrowser'
import VolunteerApplicationForm from './features/volunteers/VolunteerApplicationForm'
import VolunteerDashboard from './features/volunteers/VolunteerDashboard'
import { VolunteerApplicationsDashboard } from './features/volunteers/VolunteerApplicationsDashboard'
import { VolunteerManagementPage } from './features/volunteers/VolunteerManagementPage'
import { SuccessStoriesPage } from './features/success/SuccessStoriesPage'
import { ImpactDashboard } from './features/impact/ImpactDashboard'
import { CaseDashboard } from './features/cases/CaseDashboard'
import { CaseDetail } from './features/cases/CaseDetail'
import { EventCalendar } from './features/events/EventCalendar'
import { ResourceLibrary } from './features/resources/ResourceLibrary'
import { EmergencyContacts } from './features/emergency/EmergencyContacts'
import { ForumsPage } from './features/forums/ForumsPage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <Routes>
            {/* Public Landing Page */}
            <Route path="/home" element={<HomePage />} />
            
            {/* Public Auth Routes */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Volunteer Routes */}
            <Route path="/volunteer/apply" element={<VolunteerApplicationForm />} />
            <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
            <Route path="/volunteer/review" element={<VolunteerApplicationsDashboard />} />
            <Route path="/volunteer/manage" element={<VolunteerManagementPage />} />

            {/* Chat Routes - WhatsApp-style Layout */}
            <Route path="/" element={<MainLayout />}>
              <Route element={<ChatLayout />}>
                <Route index element={<ChatHomePage />} />
                <Route path="report/:category" element={<AIJournalistChat />} />
                <Route path="states/:state" element={<StateReportBrowser />} />
              </Route>

              {/* Full-width Routes */}
              <Route path="impact" element={<ImpactDashboard />} />
              <Route path="success" element={<SuccessStoriesPage />} />
              <Route path="cases" element={<CaseDashboard />} />
              <Route path="cases/:id" element={<CaseDetail />} />
              <Route path="events" element={<EventCalendar />} />
              <Route path="resources" element={<ResourceLibrary />} />
              <Route path="emergency" element={<EmergencyContacts />} />
              <Route path="forums" element={<ForumsPage />} />
              <Route path="dashboard/agent" element={<AgentDashboard />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  )
}

export default App