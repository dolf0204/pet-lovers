import { Table } from "antd";
import { FC } from "react";
import { usePetAdopters } from "./usePetAadopters";
import "./PetAdopters.less";

const PetAdopters: FC = () => {
  const { columns, petAdopters } = usePetAdopters();
  return (
    <div className="pet-adopters">
      <Table
        rowKey="id"
        dataSource={petAdopters ?? []}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default PetAdopters;
