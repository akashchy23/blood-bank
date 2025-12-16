import React from "react";

const AddProduct = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const product = {
      productName: form.productName.value,
      description: form.description.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      availableQuantity: parseInt(form.availableQuantity.value),
      minOrderQuantity: parseInt(form.minOrderQuantity.value),
      paymentOption: form.paymentOption.value,
      showOnHomepage: form.showOnHomepage.checked,
      images: form.images.files, // FileList
    };

    console.log(product);
    
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-base-200 border border-base-300 rounded-box w-full max-w-3xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold">Add New Product</h2>

        {/* Product Name */}
        <div>
          <label className="label font-medium">Product Name </label>
          <input
            type="text"
            name="productName"
            className="input input-bordered w-full"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="label font-medium">Product Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full h-28"
            placeholder="Write product details..."
            required
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="label font-medium">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option disabled selected>
              Select Category
            </option>
            <option value="shirt">shirt</option>
            <option value="pant">pant</option>
            <option value="jacket">jacket</option>
            
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="label font-medium">Price (BDT)</label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Available Quantity */}
        <div>
          <label className="label font-medium">Available Quantity</label>
          <input
            type="number"
            name="availableQuantity"
            className="input input-bordered w-full"
            placeholder="Available quantity"
            required
          />
        </div>

        {/* MOQ */}
        <div>
          <label className="label font-medium">
            Minimum Order Quantity (MOQ)
          </label>
          <input
            type="number"
            name="minOrderQuantity"
            className="input input-bordered w-full"
            placeholder="Minimum order quantity"
            required
          />
        </div>

        {/* Images Upload */}
        <div>
          <label className="label font-medium">Images Upload</label>
          <input
            type="file"
            name="images"
            className="file-input file-input-bordered w-full"
            multiple
          />
        </div>

        {/* Payment Option */}
        <div>
          <label className="label font-medium">Payment Option</label>
          <select
            name="paymentOption"
            className="select select-bordered w-full"
            required
          >
            <option disabled selected>
              Select Payment Option
            </option>
            <option value="cash">Cash on Delivery</option>
            <option value="online">Online Payment</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Show on Home Page */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="showOnHomepage"
            className="checkbox"
          />
          <span className="font-medium">
            Show on Home Page (default false)
          </span>
        </div>

        <button className="btn btn-neutral w-full mt-4">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
