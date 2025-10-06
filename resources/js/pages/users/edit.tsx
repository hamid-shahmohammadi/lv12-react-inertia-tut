import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,useForm,usePage } from '@inertiajs/react';



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users Edit',
        href: 'users',
    },
];

export default function Edit({user}) {
    const {baseurl} = usePage().props
    const {data,setData,errors,put}=useForm({
        name:user.name||"",
        email:user.email||"",
        password:""
    })
    function submit(e){
        e.preventDefault();
        put(baseurl+'/users/'+user.id)
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="p-3">
                    <h1 className="text-2xl font-bold mb-4">Users Edit</h1>
                    <Link href={baseurl+'/users'} className="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Back
                    </Link>
                    <div className="overflow-x-auto mt-4">
                        <form onSubmit={submit} className="space-y-6 mt-4 max-w-md mx-auto">
                        
                            <div className="grid gap-2">
                                <label className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                                    Name:
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e)=>setData('name',e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                                    Email:
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e)=>setData('email',e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e)=>setData('password',e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>
                        
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition"
                            >
                                Submit
                            </button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
