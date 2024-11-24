import productSlice, { fetchSingleProduct } from "@/redux/slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import fetchMock from "jest-fetch-mock";

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        push: () => null,
      };
    },
  }));
  
  fetchMock.enableMocks();

describe("DetailsPage", () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });
  
    it("should fetch product list", async () => {
      const mockProducts = {
        results: [
          { id: 1, name: "Product A" },
          { id: 2, name: "Product B" },
        ],
      };
      fetchMock.mockResponseOnce(JSON.stringify(mockProducts));
  
      const store = configureStore({
        reducer: {
          products: productSlice,
        },
      });
  
      await store.dispatch(fetchSingleProduct(1));

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        "http://localhost:4000/product/1"
      );
    });
  });