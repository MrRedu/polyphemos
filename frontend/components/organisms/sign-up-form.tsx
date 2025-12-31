'use client'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '../ui/field'

import { actions } from '@/actions'
import { useActionState } from 'react'
import { type FormState } from '@/validations/auth'
import { FormError } from '../atoms/form-error'

const INITIAL_STATE: FormState = {
  success: undefined,
  message: undefined,
  apiErrors: null,
  zodErrors: null,
  data: {
    username: '',
    email: '',
    password: '',
  },
}

export const SignUpForm = () => {
  const [formState, formAction] = useActionState(
    actions.auth.registerUser,
    INITIAL_STATE
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={formAction} className="">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                placeholder="Username"
                required
                type="text"
                id="username"
                name="username"
                defaultValue={formState.data?.username}
              />
              <FormError error={formState.zodErrors?.username} />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                placeholder="m@example.com"
                required
                type="email"
                id="email"
                name="email"
                defaultValue={formState.data?.email}
              />
              <FieldDescription>
                {`We'll use this to contact you. We will not share your email
                with anyone else.`}
              </FieldDescription>
              <FormError error={formState.zodErrors?.email} />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                name="password"
                required
                defaultValue={formState.data?.password}
              />
              {!formState.zodErrors?.password ? (
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              ) : (
                <FormError error={formState.zodErrors?.password} />
              )}
            </Field>
            <Field className="flex w-full flex-col gap-2">
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                defaultValue={formState.data?.confirmPassword}
                required
              />
              {!formState.zodErrors?.confirmPassword ? (
                <FieldDescription>
                  Please confirm your password.
                </FieldDescription>
              ) : (
                <FormError error={formState.zodErrors?.confirmPassword} />
              )}
            </Field>
            {formState.apiErrors && (
              <div className="text-red-500 text-xs py-2">
                {formState.apiErrors.message}
              </div>
            )}
            <FieldGroup>
              <Field>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
