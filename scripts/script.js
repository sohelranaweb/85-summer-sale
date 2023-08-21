function buttonHandle(productId, priceId) {
  const product = document.getElementById(productId);
  const productName = product.innerText;

  const productQuantity = document.getElementById("product-quantity");
  const count = productQuantity.childElementCount;
  const p = document.createElement("p");
  p.classList.add("text-xl");
  p.classList.add("font-medium");
  p.classList.add("mb-2");
  p.innerHTML = `${count + 1}. ${productName}`;

  productQuantity.appendChild(p);

  const price = document.getElementById(priceId);
  const priceString = price.innerText;
  const productPrice = parseFloat(priceString);

  const totalPrice = document.getElementById("total-price");
  const totalPriceString = totalPrice.innerText;
  const totalPriceNumber = parseFloat(totalPriceString);
  const total = totalPriceNumber + productPrice;
  let totalTwoDecimal = total;

  const couponCodeApply = document.getElementById("coupon-code-apply");
  if (totalTwoDecimal >= 200) {
    couponCodeApply.classList.remove("button-disabled");
  }

  totalPrice.innerText = totalTwoDecimal.toFixed(2);

  const makePurchase = document.getElementById("make-purchase");
  if (totalTwoDecimal > 0) {
    makePurchase.classList.remove("button-disabled");
  }

  const discountSpanText = document.getElementById("discount");
  const grantTotalSpanText = document.getElementById("grant-total");
  let couponCodevalue = document.getElementById("coupon-code-value");

  couponCodeApply.addEventListener("click", function () {
    let couponCode = couponCodevalue.value;
    if (couponCode === "SELL200") {
      const discount = totalTwoDecimal * 0.2;
      totalTwoDecimal -= discount;
      discountSpanText.innerText = discount.toFixed(2);
      grantTotalSpanText.innerText = totalTwoDecimal.toFixed(2);
    }
  });
}

document.getElementById("close-modal").addEventListener("click", function () {
  location.reload();
});
