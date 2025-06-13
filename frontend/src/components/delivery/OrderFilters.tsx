
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { DeliveryOrderFilter } from "../../types/delivery.types";
import { useVendors } from "../../hooks/useVendors";

type OrderFiltersProps = {
  onFilter: (filters: DeliveryOrderFilter) => void;
};

export const OrderFilters = ({ onFilter }: OrderFiltersProps) => {
  const [vendorId, setVendorId] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const { vendors, loading } = useVendors();

  const handleApply = () => {
    onFilter({
      vendorId: vendorId || undefined,
      dateRange: dateRange.start && dateRange.end ? dateRange : undefined
    });
  };

  const handleReset = () => {
    setVendorId("");
    setDateRange({ start: "", end: "" });
    onFilter({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
      <div>
        <Label>Vendor</Label>
        <Select value={vendorId} onValueChange={setVendorId} disabled={loading}>
          <SelectTrigger>
            <SelectValue placeholder="All Vendors" />
          </SelectTrigger>
          <SelectContent>
            {vendors.map(vendor => (
              <SelectItem key={vendor.id} value={vendor.id}>
                {vendor.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Start Date</Label>
        <Input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        />
      </div>

      <div>
        <Label>End Date</Label>
        <Input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          min={dateRange.start}
        />
      </div>

      <div className="flex space-x-2">
        <Button onClick={handleApply}>Apply Filters</Button>
        <Button variant="outline" onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
};
