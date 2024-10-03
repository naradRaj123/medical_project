import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal, SquareStackIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'

const baPartners = () => {
    return (
        <div>
            <div className='flex justify-end'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Add</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add partner</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Category
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Manufacturers" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pharmacy">Manufacturers</SelectItem>
                                        <SelectItem value="labs">Doctors</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    First Name
                                </Label>
                                <Input
                                    id="first_name"
                                    defaultValue=""
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Last Name
                                </Label>
                                <Input
                                    id="last_name"
                                    defaultValue=""
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Email id
                                </Label>
                                <Input
                                    id="email"
                                    placeholder='abc@gmail.com'
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="mobileNumber" className="text-right">
                                    Mobile number
                                </Label>
                                <Input
                                    id="mobileNumber"
                                    placeholder="xxxx-xxxx-xx"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* use data table instead of table */}
            </div>
            <Tabs defaultValue="manufacturers" className="w-full">
                <TabsList>
                    <TabsTrigger value="manufacturers">Manufacturers</TabsTrigger>
                    <TabsTrigger value="doctors">Doctors</TabsTrigger>
                </TabsList>
                <TabsContent value="manufacturers">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">SNo.</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Mobile Number</TableHead>
                                <TableHead className="text-right">Address</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Rajesh Pharmacy</TableCell>
                                <TableCell>9090909090</TableCell>
                                <TableCell>Lorem Ipsum</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <MoreHorizontal />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem><Link href={'/farma-details'}>View</Link></DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="doctors">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">SNo.</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Mobile Number</TableHead>
                                <TableHead className="text-right">Address</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Rajesh Pharmacy</TableCell>
                                <TableCell>9090909090</TableCell>
                                <TableCell>Lorem Ipsum</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <MoreHorizontal />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem><Link href={'/farma-details'}>View</Link></DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default baPartners
