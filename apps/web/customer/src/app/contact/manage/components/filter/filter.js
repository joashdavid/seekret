import './filter.css'
import { Menu, Button, Popover, Checkbox } from 'antd'
import { ReactComponent as FilterIcon } from './filter.svg'

const { SubMenu } = Menu;

const filterTitle = (
  <div className="filterPopoverTitle">
    <span>FILTER</span>
  </div>
)

const filterContent = (
  <div>
    <Menu
        style={{ width: 256 }}
        mode="inline"
      >
        <SubMenu key="sub1" title="BY STATUS">
          <Menu.ItemGroup>
            <Menu.Item key="1"><Checkbox>Saved</Checkbox></Menu.Item>
            <Menu.Item key="2"><Checkbox>Draft</Checkbox></Menu.Item>
            <Menu.Item key="3"><Checkbox>Archived</Checkbox></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title="BY ROLE">
          <Menu.ItemGroup>
            <Menu.Item key="4"><Checkbox>Employee</Checkbox></Menu.Item>
            <Menu.Item key="5"><Checkbox>Intern</Checkbox></Menu.Item>
            <Menu.Item key="6"><Checkbox>Consultant</Checkbox></Menu.Item>
            <Menu.Item key="7"><Checkbox>Vendor</Checkbox></Menu.Item>
            <Menu.Item key="8"><Checkbox>Client</Checkbox></Menu.Item>
            <Menu.Item key="9"><Checkbox>Unassigned</Checkbox></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <Button
        type="text"
        className="filter-apply-button"
      >
        APPLY
      </Button>
  </div>
)

const FilterButton = () => {

  return (
    <div>
      <Popover placement="bottomLeft" title={filterTitle} content={filterContent} trigger="click">
      <Button
          type="text"
          icon={<FilterIcon className="archive-icon"/>}
          className="filter-btn"
        >
          FILTER
        </Button>
      </Popover>
    </div>
  )
}

export default FilterButton
