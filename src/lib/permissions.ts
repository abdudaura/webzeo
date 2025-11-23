export type UserRole = 'citizen' | 'volunteer' | 'agent' | 'supervisor' | 'admin';

export type Permission =
    | 'submit_report'
    | 'browse_reports'
    | 'vote_priority'
    | 'comment'
    | 'apply_volunteer'
    | 'verify_report'
    | 'add_evidence'
    | 'flag_report'
    | 'update_status'
    | 'assign_self'
    | 'add_notes'
    | 'create_case'
    | 'approve_volunteer'
    | 'assign_reports'
    | 'approve_status'
    | 'view_analytics'
    | 'manage_roles'
    | 'system_config'
    | 'view_audit'
    | 'export_data';

const PERMISSIONS: Record<UserRole, Permission[]> = {
    citizen: [
        'submit_report',
        'browse_reports',
        'vote_priority',
        'comment',
        'apply_volunteer'
    ],
    volunteer: [
        'submit_report',
        'browse_reports',
        'vote_priority',
        'comment',
        'apply_volunteer',
        'verify_report',
        'add_evidence',
        'flag_report'
    ],
    agent: [
        'submit_report',
        'browse_reports',
        'vote_priority',
        'comment',
        'apply_volunteer',
        'verify_report',
        'add_evidence',
        'flag_report',
        'update_status',
        'assign_self',
        'add_notes',
        'create_case'
    ],
    supervisor: [
        'submit_report',
        'browse_reports',
        'vote_priority',
        'comment',
        'apply_volunteer',
        'verify_report',
        'add_evidence',
        'flag_report',
        'update_status',
        'assign_self',
        'add_notes',
        'create_case',
        'approve_volunteer',
        'assign_reports',
        'approve_status',
        'view_analytics'
    ],
    admin: [
        'submit_report',
        'browse_reports',
        'vote_priority',
        'comment',
        'apply_volunteer',
        'verify_report',
        'add_evidence',
        'flag_report',
        'update_status',
        'assign_self',
        'add_notes',
        'create_case',
        'approve_volunteer',
        'assign_reports',
        'approve_status',
        'view_analytics',
        'manage_roles',
        'system_config',
        'view_audit',
        'export_data'
    ]
};

export const hasPermission = (userRole: UserRole, permission: Permission): boolean => {
    return PERMISSIONS[userRole]?.includes(permission) || false;
};

export const canAccessState = (userStates: string[], targetState: string, userRole: UserRole): boolean => {
    if (userRole === 'admin') return true;
    if (userRole === 'citizen') return true; // Citizens can view any state
    return userStates.includes(targetState);
};
