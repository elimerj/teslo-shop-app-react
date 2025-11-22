import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Shield, ShieldOff } from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
};

export const AdminUserPage = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      email: 'john.doe@example.com',
      name: 'John Doe',
      isAdmin: true,
    },
    {
      id: '2',
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      isAdmin: false,
    },
    {
      id: '3',
      email: 'bob.wilson@example.com',
      name: 'Bob Wilson',
      isAdmin: false,
    },
    {
      id: '4',
      email: 'alice.johnson@example.com',
      name: 'Alice Johnson',
      isAdmin: true,
    },
  ]);

  const toggleAdminRole = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, isAdmin: !user.isAdmin } : user
      )
    );
  };

  return (
    <div className='min-h-screen bg-background p-8'>
      <div className='mx-auto'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-foreground mb-2'>
            User Management
          </h1>
          <p className='text-muted-foreground'>
            Manage user roles and permissions
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Add or remove admin privileges for users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className='font-medium'>
                      <div className='flex items-center gap-3'>
                        <Avatar>
                          <AvatarFallback className='bg-primary text-primary-foreground'>
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.isAdmin ? (
                        <Badge className='bg-primary text-primary-foreground'>
                          <Shield className='w-3 h-3 mr-1' />
                          Admin
                        </Badge>
                      ) : (
                        <Badge variant='secondary'>User</Badge>
                      )}
                    </TableCell>
                    <TableCell className='text-right'>
                      <Button
                        variant={user.isAdmin ? 'destructive' : 'default'}
                        size='sm'
                        onClick={() => toggleAdminRole(user.id)}
                      >
                        {user.isAdmin ? (
                          <>
                            <ShieldOff className='w-4 h-4 mr-2' />
                            Remove Admin
                          </>
                        ) : (
                          <>
                            <Shield className='w-4 h-4 mr-2' />
                            Make Admin
                          </>
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
