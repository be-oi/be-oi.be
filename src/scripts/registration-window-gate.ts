import { isRegistrationOpen } from '../data/registration-window';

/** On load only: hide open invitations and show closed copy when the window has ended. */
export function applyRegistrationWindowGate(now = new Date()): void {
  if (isRegistrationOpen(now)) return;

  for (const root of document.querySelectorAll('[data-registration-window]')) {
    for (const open of root.querySelectorAll('[data-registration-open]')) {
      open.setAttribute('hidden', '');
    }
    for (const closed of root.querySelectorAll('[data-registration-closed]')) {
      closed.removeAttribute('hidden');
    }
  }
}

applyRegistrationWindowGate();
