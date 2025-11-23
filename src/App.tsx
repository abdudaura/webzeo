import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LanguageProvider } from './lib/i18n/LanguageContext'
import MainLayout from './components/layout/MainLayout'
import HomePage from './features/home/HomePage'
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

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <Routes>
            {/* Public Auth Routes */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Volunteer Routes */}
            <Route path="/volunteer/apply" element={<VolunteerApplicationForm />} />
            <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
            <Route path="/volunteer/review" element={<VolunteerApplicationsDashboard />} />
            <Route path="/volunteer/manage" element={<VolunteerManagementPage />} />

            {/* Main App Layout */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />

              {/* Reporting & Chat */}
              <Route path="report/:category" element={<AIJournalistChat />} />

              {/* Data & Browsing */}
              <Route path="states/:state" element={<StateReportBrowser />} />
              <Route path="impact" element={<ImpactDashboard />} />
              <Route path="success" element={<SuccessStoriesPage />} />

              {/* Case Management */}
              <Route path="cases" element={<CaseDashboard />} />
              <Route path="cases/:id" element={<CaseDetail />} />

              {/* Community & Resources */}
              <Route path="events" element={<EventCalendar />} />
              <Route path="resources" element={<ResourceLibrary />} />
              <Route path="emergency" element={<EmergencyContacts />} />

              {/* Agent Dashboard */}
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