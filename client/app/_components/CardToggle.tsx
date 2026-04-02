"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
import { FoodCardContext } from "../_contexts/FoodCardContext";
import SelectedFoodCard from "./SelectedFoodCard";
import { FoodCardAddButtons } from "./CardAddButtons";
import CheckOutFoodCard from "./CheckOutFoodCard";
import { Input } from "@/components/ui/input";

export function CardToggle() {
  const data = useContext(FoodCardContext);
  console.log(data, "feroihuvg");
  return (
    <Tabs defaultValue="card" className="w-full p-4">
      <TabsList className="w-fill justify-between flex">
        <TabsTrigger value="card" className="px-18 py-2">
          Card
        </TabsTrigger>
        <TabsTrigger value="order" className="px-17 py-2">
          Order
        </TabsTrigger>
      </TabsList>
      <TabsContent value="card">
        <Card>
          {data.foodCard.map((item) => (
            <CardContent className="text-sm text-muted-foreground">
              <CheckOutFoodCard food={item.food} />
            </CardContent>
          ))}

          <CardTitle className="mx-4">Delivery location</CardTitle>
          <CardContent className="text-sm text-muted-foreground gap-2 flex flex-col">
            <Input
              type="text"
              className="w-full h-20"
              placeholder="Please share your complete address"
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="order">
        <Card>
          {data.foodCard.map((item) => (
            <CardContent className="text-sm text-muted-foreground">
              {item.quantity}
            </CardContent>
          ))}
        </Card>
      </TabsContent>
    </Tabs>
  );
}
