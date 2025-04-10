import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Button,
    Textarea,
    Select,
    Option,
    Avatar,  
    Chip    
  } from "@material-tailwind/react";
  import { authorsTableData } from "@/data";
  
  export function Payroll() {
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        {/* This is form for simple payroll system */}
        <Card>
            <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
                Enhanced Payroll Entry Form
            </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Employee ID" />
                <Input label="Employee Name" />
                <Input label="Department" />
                <Input label="Position" />
                <Input label="Hours Worked" type="number" />
                <Input label="Hourly Rate (₱)" type="number" />
                <Input label="Overtime Hours" type="number" />
                <Input label="Bonus (₱)" type="number" />
                <Input label="Allowances (₱)" type="number" />
                <Input label="Deductions (₱)" type="number" />
                <Input label="Tax (%)" type="number" />
                <Input label="Payroll Date" type="date" />
                <Input label="Pay Period Start" type="date" />
                <Input label="Pay Period End" type="date" />
                <Select label="Payment Method">
                <Option>Bank Transfer</Option>
                <Option>Cash</Option>
                <Option>Check</Option>
                </Select>
                <Input label="Bank Name" />
                <Input label="Account Number" />
                <Input label="Net Pay (Calculated)" disabled />
            </div>
            <div className="mt-4">
                <Textarea label="Remarks" />
            </div>
            <div className="flex justify-end mt-6">
                <Button color="gray">Submit Payroll</Button>
            </div>
            </CardBody>
        </Card>




        {/* Authors Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Authors Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["author", "function", "status", "employed", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {authorsTableData.map(
                  ({ img, name, email, job, online, date }, key) => {
                    const className = `py-3 px-5 ${
                      key === authorsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" variant="rounded" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {job[0]}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {job[1]}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={online ? "green" : "blue-gray"}
                            value={online ? "online" : "offline"}
                            className="py-0.5 px-2 text-[11px] font-medium w-fit"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            Edit
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
  
        {/* Payroll Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Simple Payroll System
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["employee", "position", "hours worked", "rate/hr", "total pay"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Alex Johnson",
                    position: "Developer",
                    hours: 40,
                    rate: 25,
                  },
                  {
                    name: "Jamie Lee",
                    position: "Designer",
                    hours: 38,
                    rate: 22,
                  },
                  {
                    name: "Taylor Smith",
                    position: "Project Manager",
                    hours: 42,
                    rate: 30,
                  },
                ].map(({ name, position, hours, rate }, idx, arr) => {
                  const className = `py-3 px-5 ${
                    idx === arr.length - 1 ? "" : "border-b border-blue-gray-50"
                  }`;
                  const total = hours * rate;
                  return (
                    <tr key={name}>
                      <td className={className}>
                        <Typography className="text-sm font-medium text-blue-gray-700">
                          {name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-sm text-blue-gray-600">
                          {position}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-sm text-blue-gray-600">
                          {hours}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-sm text-blue-gray-600">
                          {"\u20B1" + rate.toFixed(2)}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-sm font-semibold text-blue-gray-800">
                          {"\u20B1" + total.toFixed(2)}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>

        
      </div>
    );
  }
  
  export default Payroll;
  