"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";


export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address?: string;
  company?: string;
  status?: string;
};

export const status = [
  "In Progress",
  "Completed",
  "Pending",
  "Declined",
  "Not Interested",
]



export default function Page() {
  const [data, setData] = useState<User[]>([]);

  const fetchData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        console.log(response.data[0]);
        const data = response.data.map((user: any) => {
          return {
            ...user,
            address: `${user.address.street}, ${user.address.city}`,
            company: `${user.company.name}: ${user.company.bs} - ${user.company.catchPhrase}`,
            status : status[Math.floor(Math.random() * 4)]
          };
        });
        // console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={data} />
   
    </div>
  );
}
