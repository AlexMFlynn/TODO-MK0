import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export function NavBar() {
    return (
        <Breadcrumb
            color='teal'
            separator='|'>
            <BreadcrumbItem>
                <BreadcrumbLink as={NavLink} to='/' end>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={NavLink} to='addtask' >
                    Add Task
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem >
                <BreadcrumbLink as={NavLink} to='tasklist'>
                    Tasks List
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};