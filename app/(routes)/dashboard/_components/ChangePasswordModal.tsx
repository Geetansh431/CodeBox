'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

interface ChangePasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChangePasswordModal({
  open,
  onOpenChange,
}: ChangePasswordModalProps) {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.currentPassword.trim()) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = 'New password is required';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    }

    if (formData.newPassword && formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (
      formData.newPassword &&
      formData.currentPassword &&
      formData.newPassword === formData.currentPassword
    ) {
      newErrors.newPassword =
        'New password must be different from current password';
    }

    if (
      formData.newPassword &&
      formData.confirmPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      await axios.post('/api/auth/change-password', {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      toast.success('Password changed successfully!');
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setErrors({});
      onOpenChange(false);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error || 'Failed to change password';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-4 rounded-2xl bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="font-game text-2xl flex items-center gap-2">
            <Lock size={20} />
            Change Password
          </DialogTitle>
          <DialogDescription className="text-gray-400 font-game text-sm">
            Enter your current password and choose a new one
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-game text-gray-300">
              Current Password
            </label>
            <Input
              type="password"
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  currentPassword: e.target.value,
                })
              }
              className="border-2 font-game bg-zinc-800"
              placeholder="Enter current password"
            />
            {errors.currentPassword && (
              <p className="text-yellow-400 text-xs font-game">
                {errors.currentPassword}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-game text-gray-300">
              New Password
            </label>
            <Input
              type="password"
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  newPassword: e.target.value,
                })
              }
              className="border-2 font-game bg-zinc-800"
              placeholder="Enter new password"
            />
            {errors.newPassword && (
              <p className="text-yellow-400 text-xs font-game">
                {errors.newPassword}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-game text-gray-300">
              Confirm Password
            </label>
            <Input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              className="border-2 font-game bg-zinc-800"
              placeholder="Confirm new password"
            />
            {errors.confirmPassword && (
              <p className="text-yellow-400 text-xs font-game">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <DialogFooter className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 font-game border-2"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant={loading ? 'pixelDisabled' : 'pixel'}
              disabled={loading}
              className="flex-1 font-game"
            >
              {loading ? 'Changing...' : 'Change Password'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
