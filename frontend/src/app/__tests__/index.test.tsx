import fetchMock from "jest-fetch-mock";
import { configureStore } from "@reduxjs/toolkit";
import productSlice, {
  fetchFilteredByBrand,
  fetchProducts,
} from "@/redux/slices/productSlice";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => null,
    };
  },
}));

fetchMock.enableMocks();

describe("Home", () => {
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

    await store.dispatch(fetchProducts({ offset: 0, limit: 3 }));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:4000/products?offset=0&limit=3"
    );
  });

  it("should fetch products filtered by brand", async () => {
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

    await store.dispatch(fetchFilteredByBrand({ offset: 0, limit: 3, id: 1 }));


    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:4000/product-list-by-brandId/1?offset=0&limit=3"
    );
  });
});
