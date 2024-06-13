'use client';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type UserProps = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: 'owner' | 'student';
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
};

const UserTypeCard = ({
  value,
  title,
  text,
  register,
  userType,
  setUserType,
}: UserProps) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          'w-full cursor-pointer',
          userType === value && 'border-orange-400'
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                'flex justify-center p-3',
                userType === value && 'border-orange-400'
              )}
            >
              <User
                size={30}
                className={cn(
                  userType === value ? 'text-orange-400' : 'text-gray-400'
                )}
              />
            </Card>
            <div>
              <CardDescription className="text-iridium">
                {title}
              </CardDescription>
              <CardDescription className="text-gray-400">
                {text}
              </CardDescription>
            </div>
          </div>
          <div>
            <div
              className={cn(
                'w-4 h-4 rounded-full',
                userType === value ? 'bg-orange-400' : 'bg-transparent'
              )}
            >
              <Input
                {...register('type', {
                  onChange: ({ target }) => setUserType(target.value),
                })}
                value={value}
                id={value}
                className="hidden"
                type="radio"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;