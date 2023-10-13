'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from '@nextui-org/table'

import { User, columns } from '../users/columns'

export default function UserTable({ users }: { users: User[] }) {
  return (
    <Table aria-label='Users table'>
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users}>
        {user => (
          <TableRow key={user.id}>
            {columnKey => <TableCell>{getKeyValue(user, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
