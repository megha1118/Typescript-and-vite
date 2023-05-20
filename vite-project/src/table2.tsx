import React, { useState } from 'react';
import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import "./button.css"
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Card from '@mui/material/Card';

interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentList: React.FC = () => {
  const initialDepartments: Department[] = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  const [departments, setDepartments] = useState<Department[]>(initialDepartments);

  const handleToggleDepartment = (index: number) => {
    setDepartments((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      const selectedDepartment = updatedDepartments[index];
      const allSubDepartmentsSelected =
        selectedDepartment.sub_departments.length === selectedDepartment.sub_departments.filter(
          (subDepartment) => selectedDepartment.sub_departments.includes(subDepartment)
        ).length;

      if (allSubDepartmentsSelected) {
        selectedDepartment.sub_departments = [];
      } else {
        selectedDepartment.sub_departments = [...selectedDepartment.sub_departments];
      }

      return updatedDepartments;
    });
  };

  const handleToggleSubDepartment = (departmentIndex: number, subDepartmentIndex: number) => {
    setDepartments((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      const selectedSubDepartment = updatedDepartments[departmentIndex].sub_departments[subDepartmentIndex];
      const subDepartmentIndexInSelected = updatedDepartments[departmentIndex].sub_departments.indexOf(selectedSubDepartment);

      if (subDepartmentIndexInSelected !== -1) {
        updatedDepartments[departmentIndex].sub_departments.splice(subDepartmentIndexInSelected, 1);
      } else {
        updatedDepartments[departmentIndex].sub_departments.push(selectedSubDepartment);
      }

      return updatedDepartments;
    });
  };

  const isDepartmentSelected = (department: Department) => {
    return department.sub_departments.length > 0 && department.sub_departments.length === department.sub_departments.filter(
      (subDepartment) => department.sub_departments.includes(subDepartment)
    ).length;
  };

  const isDepartmentIndeterminate = (department: Department) => {
    return department.sub_departments.length > 0 && !isDepartmentSelected(department);
  };

  const handleToggleAllSubDepartments = (departmentIndex: number, checked: boolean) => {
    setDepartments((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      const selectedDepartment = updatedDepartments[departmentIndex];

      if (checked) {
        selectedDepartment.sub_departments = [...selectedDepartment.sub_departments];
      } else {
        selectedDepartment.sub_departments = [];
      }

      return updatedDepartments;
    });
  };

  const renderDepartment = (department: Department, index: number) => {
    const isOpen = department.sub_departments.length > 0;

    return (
      <Card id='card2'>
 <React.Fragment key={department.department}>
        <ListItem  onClick={() => handleToggleDepartment(index)}>
          <ListItemIcon>
            <Checkbox
              checked={isDepartmentSelected(department)}
              indeterminate={isDepartmentIndeterminate(department)}
              disableRipple
              disableFocusRipple
              onChange={(e) => handleToggleAllSubDepartments(index, e.target.checked)}
            />
          </ListItemIcon>
          <ListItemText primary={department.department} />
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {department.sub_departments.map((subDepartment, subDepartmentIndex) => (
              <ListItem
                key={subDepartment}
                onClick={() => handleToggleSubDepartment(index, subDepartmentIndex)}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={department.sub_departments.includes(subDepartment)}
                    disableRipple
                    disableFocusRipple
                  />
                </ListItemIcon>
                <ListItemText primary={subDepartment} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </React.Fragment>
      </Card>
     
    );
  };

  return (
    <List component="nav">
      {departments.map((department, index) => renderDepartment(department, index))}
    </List>
  );
};

export {DepartmentList};


