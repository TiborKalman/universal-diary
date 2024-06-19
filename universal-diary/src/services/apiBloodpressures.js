import supabase from "./supabase";

import { PAGING_SIZE } from "../utils/constants";

export async function getBloodpressures({ filter, sortBy, page }) {
  let query = supabase
    .from("bloodpressures")
    .select(
      "id, created_at, pressureDate, sys_mmhg, dia_mmhg, pulse_per_minute",
      {
        count: "exact",
      }
    );

  //console.log("after query");
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    //console.log("in if page " + page);
    const from = (page - 1) * PAGING_SIZE;
    const to = from + PAGING_SIZE - 1;

    //console.log("from " + from);
    //console.log("to " + to);
    query = query.range(from, to);

    const { data, error, count } = await query;

    //console.log("before if error ");
    if (error) {
      console.error("my error:" + error);
      throw new Error("Bloodpressures could not be loaded");
    }

    //console.log("after if error ");

    // data.map((item) => {
    //console.log("item.id..." + item.id);
    // console.log("item.created_at..." + item.created_at);
    //});

    return { data, count };
  }
}

export async function deleteBloodpressure(id) {
  const { data, error } = await supabase
    .from("bloodpressures")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Bloodpressure could not be deleted");
  }
  return data;
}

export async function getBloodpressure(id) {
  //console.log("xxxxxxxx getBloodpressure(id)  " + id);

  const { data, error } = await supabase
    .from("bloodpressures")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Bloodpressure not found");
  }

  return data;
}

export async function createEditBloodpressure(
  newBloodpressure,
  id,
  created_at,
  pressureDate
) {
  console.log("createEditBloodpressure: created_at " + created_at);
  console.log("createEditBloodpressure: pressureDate " + pressureDate);
  let query = supabase.from("bloodpressures");
  if (!id) {
    console.log("aaa");
    query = query.insert({ ...newBloodpressure });
  } else if (id) {
    console.log("bbb");
    query = query
      .update({ ...newBloodpressure, created_at, pressureDate })
      .eq("id", id);
  }
  console.log("ccc");
  const { data, error } = await query.select().single();
  console.log("ddd");
  //console.log("createEditBloodpressure data: " + data);

  if (error) {
    console.error("error: " + error);
    throw new Error("Bloodpressure was not created");
  }

  return data;
}
