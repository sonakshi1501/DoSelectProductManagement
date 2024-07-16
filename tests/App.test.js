import { mount, shallowMount } from "@vue/test-utils";
import Products from "../src/views/Products.vue";
import ProductDetail from "../src/views/ProductDetail.vue";
import { createStore } from "vuex";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import flushPromises from "flush-promises";

describe("Product Management Application", () => {
  let actions;
  let store;
  let mock;

  beforeEach(() => {
    actions = {
      fetchProducts: jest.fn(),
    };

    store = createStore({
      state: {
        products: [
          {
            id: 1,
            title: "Product 1",
            description: "Description 1",
            price: 100,
            thumbnail: "image1.jpg",
          },
          {
            id: 2,
            title: "Product 2",
            description: "Description 2",
            price: 200,
            thumbnail: "image2.jpg",
          },
        ],
      },
      actions,
    });

    mock = new MockAdapter(axios);
    mock.onGet("http://localhost:8001/products").reply(200, {
      products: [
        {
          id: 1,
          title: "Product 1",
          description: "Description 1",
          price: 100,
          thumbnail: "image1.jpg",
        },
        {
          id: 2,
          title: "Product 2",
          description: "Description 2",
          price: 200,
          thumbnail: "image2.jpg",
        },
      ],
    });
    mock.onGet("http://localhost:8001/products/1").reply(200, {
      id: 1,
      title: "Product 1",
      description: "Description 1",
      price: 100,
      thumbnail: "image1.jpg",
    });
  });

  afterEach(() => {
    mock.restore();
  });

  describe("Products.vue", () => {
    it("fetches products on created", () => {
      mount(Products, {
        global: {
          plugins: [store],
        },
      });
      expect(actions.fetchProducts).toHaveBeenCalled();
    });

    it("renders product cards", () => {
      const wrapper = mount(Products, {
        global: {
          plugins: [store],
        },
      });
      const cards = wrapper.findAll(".card");
      expect(cards.length).toBe(2);
    });

    it('renders product details in cards', async () => {
      const wrapper = shallowMount(Products, {
        global: {
          plugins: [store],
        },
      });
  
      await flushPromises(); // wait for all promises to resolve
  
      const cardTitles = wrapper.findAll('.card-title');
      expect(cardTitles[0].text()).toBe('Product 1');
      expect(cardTitles[1].text()).toBe('Product 2');
    });
  });

  describe("ProductDetail.vue", () => {
    it("fetches product details on created", async () => {
      const $route = {
        params: {
          id: 1,
        },
      };

      const wrapper = mount(ProductDetail, {
        global: {
          mocks: { $route },
        },
      });

      await flushPromises(); // Wait for data fetching

      expect(wrapper.vm.product.title).toBe("Product 1");
    });

    it("renders product details", async () => {
      const $route = {
        params: {
          id: 1,
        },
      };

      const wrapper = mount(ProductDetail, {
        global: {
          mocks: { $route },
        },
      });

      await flushPromises(); // Wait for data fetching

      expect(wrapper.find(".card-title").text()).toBe("Product 1");
      expect(wrapper.find(".card-text").text()).toContain("Description 1");
    });
  });
});
