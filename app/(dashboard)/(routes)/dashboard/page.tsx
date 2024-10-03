"use client"

import StatCard from '@/components/stat-card'
import { HeartPulse, SquareStackIcon, StarsIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PieChart from './_components/pieChart'
import { useGetConsortiumMutation } from '@/app/redux/api'
import { useSelector } from 'react-redux'
import { RootState } from "@/app/redux/store";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export const options = {
  title: "Prescriptions send",
  is3D: true,
};





const DashboardPage = () => {

  const auth = useSelector((store: RootState) => store.auth);
  const { toast } = useToast();
  const [partners, setPartners] = useState([]);
  const router = useRouter();
  console.log( "dashboard auth" , auth.isAuthenticated)

  // if(!auth.isAuthenticated){
  //     router.push('/sign-in')
  // }

  const clinicRef = auth.user?.result?.clinicData[0]?._id;
  const clinicRe = {
    "clinicRef": clinicRef
  }

const [getConsortium, { isLoading: isRegionLoading, data: any, isError: consortiumError , error: drpartnererror }] = useGetConsortiumMutation();

  useEffect(() => {
    const getConsortiumData = async () => {
      try {
  
        const response = await getConsortium(clinicRe)
        if (response) {
        } else {
          toast({
            title: "",
            description: (
              <pre className="mt-2 w-[340px] rounded-md p-5 bg-red-600 ">
                <code className="text-white">Data Not Found</code>
              </pre>
            )
          });
        }
        const output = response ;
        setPartners(output.data.result[0]);
      } catch (error) {
        toast({
          title: "Login 1st ",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-red-400 p-4">
              <code className="text-white"> Data Not Load Login 1st ! </code>
            </pre>
          )
        });
      }
    }
    getConsortiumData();
  }, []);


  return (
    <div>
      <div className='flex justify-between mb-8'>
        <div className='flex items-center w-[30%]'>
          <label className='w-full'>Total Prescriptions</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center w-[20%]'>
          <label className='w-full'>Location</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Banglore" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Banglore">Banglore</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div>
          <StatCard
            label="Medical prescriptions"
            value={200}
            icon={SquareStackIcon}
          />

          <PieChart data={partners.pharmacy} options={options}/>
        </div>

        <div>
          <StatCard
            label="Lab prescriptions"
            value={200}
            icon={HeartPulse}
          />
          <PieChart data={partners.lab} options={options}/>

        </div>

        <div>
          <StatCard
            label="Physio recommendations"
            value={200}
            icon={StarsIcon}
          />
          <PieChart data={partners.diagnosticCenter} options={options}/>
        </div>

        <div>
          <StatCard
            label="Diagnostic centre prescriptions"
            value={200}
            icon={StarsIcon}
          />
          <PieChart data={partners.physio} options={options}/>
        </div>

        <div>
          <StatCard
            label="Nursing prescriptions"
            value={200}
            icon={StarsIcon}
          />
          <PieChart data={partners.nurse} options={options}/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage 
