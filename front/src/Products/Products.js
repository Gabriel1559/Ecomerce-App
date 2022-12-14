import ProductCard from "./ProductCard";
import "../Styles/general.scss";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import logger from "use-reducer-logger";

const Products = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_REQUEST":
				return { ...state, loading: true };
			case "FETCH_SUCCESS":
				return { ...state, products: action.payload, loading: false };
			case "FETCH_FAIL":
				return { ...state, loading: false, error: action.payload };
			default:
				return state;
		}
	};
	const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
		products: [],
		loading: true,
		error: "",
	});
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH_REQUEST" });
			try {
				const result = await axios.get("/api/products");
				dispatch({ type: "FETCH_SUCCESS", payload: result.data });
			} catch (err) {
				dispatch({ type: "FETCH_FAIL", payload: err.message });
			}

			// setProducts(result.data);
		};
		fetchData();
	}, []);
	return (
		<div className="products">
			{products.map((product) => (
				<div className="product" key={product.slug}>
					<ProductCard product={product} />
				</div>
			))}
		</div>
	);
};

export default Products;
