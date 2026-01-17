"use client";

import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (domain: string) => {
    if (!cart.includes(domain)) {
      setCart([...cart, domain]);
    }
  };

  const removeFromCart = (domain: string) => {
    setCart(cart.filter((d) => d !== domain));
  };

  return { cart, addToCart, removeFromCart };
}
