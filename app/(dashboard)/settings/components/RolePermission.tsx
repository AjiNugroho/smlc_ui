'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Role {
  id: string;
  name: string;
  permissions: {
    home: string[];
    chargeStation: string[];
    controlSystem: string[];
    settings: string[];
  };
}

const rolesObj = [
    {
      id: '1',
      name: 'Owner',
      permissions: {
        home: ['read'],
        chargeStation: ['read chargers', 'read sessions', 'restart charger', 'stop session', 'restart session', 'add charger', 'delete charger'],
        controlSystem: ['read group', 'add group', 'edit group', 'delete group', 'crud charging profile', 'crud smart charging'],
        settings: ['edit profile', 'crud organization', 'crud roles', 'crud permission']
      }
    },
    {
      id: '2',
      name: 'Manager',
      permissions: {
        home: ['read'],
        chargeStation: ['read chargers', 'read sessions', 'restart charger', 'stop session', 'restart session'],
        controlSystem: ['read group', 'crud charging profile', 'crud smart charging'],
        settings: ['edit profile', 'crud organization']
      }
    },
    {
      id: '3',
      name: 'Operator',
      permissions: {
        home: ['read'],
        chargeStation: ['read chargers', 'read sessions', 'restart charger', 'stop session', 'restart session'],
        controlSystem: ['read group', 'crud charging profile'],
        settings: ['edit profile']
      }
    },
    {
      id: '4',
      name: 'Staff',
      permissions: {
        home: ['read'],
        chargeStation: ['read chargers', 'read sessions'],
        controlSystem: ['read group', 'crud charging profile'],
        settings: ['edit profile']
      }
    }
  ]

const RolePermissionManager: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>(rolesObj);

  const [selectedRole, setSelectedRole] = useState<Role | null>();
  const [selectedPermissions, setSelectedPermissions] = useState<{
    home: string[];
    chargeStation: string[];
    controlSystem: string[];
    settings: string[];
  }>({
    home: [],
    chargeStation: [],
    controlSystem: [],
    settings: []
  });

  const handleRoleSelect = (roleId: string) => {
    const selectedRole = roles.find(role=>role.id===roleId)
    if(selectedRole){

        setSelectedRole(selectedRole);
        setSelectedPermissions(selectedRole.permissions);
    }
  };

  const handlePermissionChange = (section: keyof Role['permissions'], permission: string) => {
    setSelectedPermissions((prevPermissions) => ({
      ...prevPermissions,
      [section]: prevPermissions[section].includes(permission)
        ? prevPermissions[section].filter((p) => p !== permission)
        : [...prevPermissions[section], permission]
    }));
  };

  const handleSaveRole = () => {
    if (selectedRole) {
      const updatedRoles = roles.map((role) =>
        role.id === selectedRole.id ? { ...role, permissions: selectedPermissions } : role
      );
      setRoles(updatedRoles);
      setSelectedRole(null);
      setSelectedPermissions({
        home: [],
        chargeStation: [],
        controlSystem: [],
        settings: []
      });
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Role and Permission Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Roles</Label>
            <Select onValueChange={handleRoleSelect} >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.id}>
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedRole && (
            <div>
              <Label>Permissions</Label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Home Page</Label>
                  {selectedRole.permissions.home.map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedPermissions.home.includes(permission)}
                        onCheckedChange={() => handlePermissionChange('home', permission)}
                      />
                      <span>{permission}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <Label>Charge Station</Label>
                  {selectedRole.permissions.chargeStation.map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedPermissions.chargeStation.includes(permission)}
                        onCheckedChange={() => handlePermissionChange('chargeStation', permission)}
                      />
                      <span>{permission}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <Label>Control System</Label>
                  {selectedRole.permissions.controlSystem.map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedPermissions.controlSystem.includes(permission)}
                        onCheckedChange={() => handlePermissionChange('controlSystem', permission)}
                      />
                      <span>{permission}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <Label>Settings</Label>
                  {selectedRole.permissions.settings.map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedPermissions.settings.includes(permission)}
                        onCheckedChange={() => handlePermissionChange('settings', permission)}
                      />
                      <span>{permission}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {selectedRole && (
          <div className="mt-4 flex justify-end">
            <Button onClick={handleSaveRole}>Save Role</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RolePermissionManager;