'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Lock, LogOut, Trash2, AlertCircle } from 'lucide-react';
import { ChangePasswordModal } from './ChangePasswordModal';

export function AccountActions() {
  const { logout } = useAuth();
  const router = useRouter();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout?.();
      router.push('/');
    } catch (err) {
      setError('Failed to logout');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);
      await axios.delete('/api/user');
      await logout?.();
      router.push('/');
    } catch (err) {
      setError('Failed to delete account');
    } finally {
      setLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div className="mt-8 p-5 border-4 rounded-2xl">
      <h2 className="font-game text-2xl mb-4">Account Settings</h2>

      <div className="space-y-3">
        <Button
          onClick={handleChangePassword}
          variant="pixel"
          className="w-full font-game text-lg flex items-center justify-center gap-2"
        >
          <Lock size={20} /> Change Password
        </Button>

        <Button
          onClick={handleLogout}
          disabled={loading}
          variant="pixel"
          className="w-full font-game text-lg flex items-center justify-center gap-2"
        >
          <LogOut size={20} /> {loading ? 'Logging out...' : 'Logout'}
        </Button>

        <Button
          onClick={() => setShowDeleteConfirm(true)}
          variant="pixel"
          className="w-full font-game text-lg flex items-center justify-center gap-2"
        >
          <Trash2 size={20} /> Delete Account
        </Button>
      </div>

      {error && (
        <div className="text-yellow-400 text-sm text-center mt-3 font-game">
          {error}
        </div>
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-900 border-4 rounded-2xl p-8 max-w-sm mx-4">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <AlertCircle size={40} className="text-yellow-400" />
              </div>
              <h2 className="font-game text-3xl mb-3">Delete Account</h2>
              <p className="font-game text-gray-400">
                This action cannot be undone. All your data will be permanently
                deleted.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => setShowDeleteConfirm(false)}
                variant="pixel"
                className="flex-1 font-game"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDeleteAccount}
                disabled={loading}
                variant="pixel"
                className="flex-1 font-game"
              >
                {loading ? 'Deleting...' : 'Delete'}
              </Button>
            </div>
          </div>
        </div>
      )}

      <ChangePasswordModal
        open={showChangePassword}
        onOpenChange={setShowChangePassword}
      />
    </div>
  );
}
