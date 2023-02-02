import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export function NavBar() {
    return (

        <Breadcrumb
            separator='|'>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={NavLink}
                    to='/' end
                    color='teal'
                >
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={NavLink}
                    to='tasklist'
                    color='teal'
                >
                    Tasks List
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};