import { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, Modal } from "react-native";
import { supabase } from "../supabase";

export default function App() {
  const [punchType, setPunchType] = useState("Tradicional");
  const [alcohol, setAlcohol] = useState("Con Alcohol");
  const [quantity, setQuantity] = useState("");
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [dueDate, setDueDate] = useState("29 de noviembre");
  const [size, setSize] = useState("750ml");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const dates = [
    "29 de noviembre",
    "6 de diciembre",
    "20 de diciembre",
    "22 de diciembre",
    "23 de diciembre",
  ];

  const punchTypes = [
    { name: "Tradicional", icon: "🥃", desc: "Receta clásica" },
    { name: "Café", icon: "☕", desc: "Con sabor a café" }
  ];

  const alcoholOptions = [
    { name: "Con Alcohol", icon: "🍷" },
    { name: "Sin Alcohol", icon: "🧃" }
  ];

  const sizeOptions = [
    { name: "750ml", label: "750 ml" },
    { name: "500ml", label: "500 ml" },
  ];

  function validateForm() {
    if (!clientName.trim()) {
      alert("Por favor ingresa tu nombre");
      return false;
    }
    if (!phone.trim()) {
      alert("Por favor ingresa tu teléfono");
      return false;
    }
    if (!quantity || quantity === "0") {
      alert("Por favor ingresa la cantidad");
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!validateForm()) return;
    setModalVisible(true);
  }

  async function confirmOrder() {
    setLoading(true);
    
    const { error } = await supabase.from("orders").insert({
      client_name: clientName,
      client_phone: phone,
      punch_type: `${punchType} - ${alcohol}`,
        size: size,
      quantity: quantity,
      due_date: dueDate,
      status: "pendiente",
    });

    setLoading(false);

    if (error) {
      alert("Error al guardar el pedido. Intenta nuevamente.");
      setModalVisible(false);
      return;
    }

    // Limpiar formulario
    setClientName("");
    setPhone("");
    setQuantity("");
    setPunchType("Tradicional");
    setAlcohol("Con Alcohol");
    setDueDate("29 de noviembre");
  setSize("750ml");
    
    setModalVisible(false);
    alert("¡Pedido registrado exitosamente! 🎉");
  }

  return (
    <View className="flex-1 bg-gradient-to-b from-orange-50 to-white">
      <ScrollView className="flex-1 px-5 pt-12 pb-6">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className="text-4xl mb-2">🍹</Text>
          <Text className="text-3xl font-bold text-orange-900">
            Ron Ponche Artesanal
          </Text>
          <Text className="text-gray-600 mt-1">Haz tu pedido ahora</Text>
        </View>

        {/* Tipo de ponche */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Tipo de Ponche
          </Text>
          <View className="flex-row gap-3">
            {punchTypes.map((t) => (
              <Pressable
                key={t.name}
                onPress={() => setPunchType(t.name)}
                className={`relative flex-1 p-4 rounded-2xl border-2 ${
                  punchType === t.name
                    ? "bg-orange-600 border-orange-600"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* radio indicator */}
                <View className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 items-center justify-center">
                  {punchType === t.name && <View className="w-2 h-2 rounded-full bg-white" />}
                </View>
                <Text className="text-3xl text-center mb-1">{t.icon}</Text>
                <Text
                  className={`text-center font-semibold ${
                    punchType === t.name ? "text-white" : "text-gray-800"
                  }`}
                >
                  {t.name}
                </Text>
                <Text
                  className={`text-center text-xs mt-1 ${
                    punchType === t.name ? "text-orange-100" : "text-gray-500"
                  }`}
                >
                  {t.desc}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Con o sin alcohol */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Contenido de Alcohol
          </Text>
          <View className="flex-row gap-3">
            {alcoholOptions.map((a) => (
              <Pressable
                key={a.name}
                onPress={() => setAlcohol(a.name)}
                className={`relative flex-1 p-4 rounded-2xl border-2 ${
                  alcohol === a.name
                    ? "bg-orange-600 border-orange-600"
                    : "bg-white border-gray-200"
                }`}
              >
                <View className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 items-center justify-center">
                  {alcohol === a.name && <View className="w-2 h-2 rounded-full bg-white" />}
                </View>
                <Text className="text-3xl text-center mb-1">{a.icon}</Text>
                <Text
                  className={`text-center font-semibold text-sm ${
                    alcohol === a.name ? "text-white" : "text-gray-800"
                  }`}
                >
                  {a.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Tamaño de la botella */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-3">Tamaño de la botella</Text>
          <View className="flex-row gap-3">
            {sizeOptions.map((s) => (
              <Pressable
                key={s.name}
                onPress={() => setSize(s.name)}
                className={`relative flex-1 p-4 rounded-2xl border-2 ${
                  size === s.name
                    ? "bg-orange-600 border-orange-600"
                    : "bg-white border-gray-200"
                }`}
              >
                <View className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 items-center justify-center">
                  {size === s.name && <View className="w-2 h-2 rounded-full bg-white" />}
                </View>
                <Text className="text-center font-semibold text-sm text-gray-800">{s.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Cantidad */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Cantidad de Botellas
          </Text>
          <View className="bg-white border-2 border-gray-200 rounded-2xl p-4">
            <TextInput
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
              className="text-2xl font-bold text-center text-gray-800"
              placeholder="0"
              placeholderTextColor="#9CA3AF"
            />
            <Text className="text-center text-gray-500 text-sm mt-1">
              Ingresa la cantidad deseada
            </Text>
          </View>
        </View>

        {/* Datos del cliente */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Tus Datos
          </Text>
          
          <View className="mb-3">
            <Text className="text-sm font-semibold text-gray-700 mb-2 ml-1">
              Nombre Completo
            </Text>
            <TextInput
              value={clientName}
              onChangeText={setClientName}
              className="bg-white border-2 border-gray-200 p-4 rounded-2xl text-gray-800 text-base"
              placeholder="Ej. Juan Pérez"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View>
            <Text className="text-sm font-semibold text-gray-700 mb-2 ml-1">
              Número de Teléfono
            </Text>
            <TextInput
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              className="bg-white border-2 border-gray-200 p-4 rounded-2xl text-gray-800 text-base"
              placeholder="Ej. 6000-0000"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Fecha de entrega */}
        <View className="mb-8">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            📅 Fecha de Entrega
          </Text>
          <View className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
            {dates.map((d, index) => (
              <Pressable
                key={d}
                onPress={() => setDueDate(d)}
                className={`p-4 border-b border-gray-100 ${
                  index === dates.length - 1 ? "border-b-0" : ""
                } ${dueDate === d ? "bg-orange-50" : ""}`}
              >
                <View className="flex-row items-center justify-between">
                  <Text
                    className={`text-base ${
                      dueDate === d
                        ? "text-orange-600 font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {d}
                  </Text>
                  {dueDate === d && (
                    <View className="w-6 h-6 bg-orange-600 rounded-full items-center justify-center">
                      <Text className="text-white text-xs font-bold">✓</Text>
                    </View>
                  )}
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Botón de envío */}
        <Pressable
          onPress={handleSubmit}
          className="bg-orange-600 py-5 rounded-2xl shadow-lg active:bg-orange-700"
        >
          <Text className="text-center text-white font-bold text-lg">
            Realizar Pedido 🛒
          </Text>
        </Pressable>

        <View className="h-6" />
      </ScrollView>

      {/* Modal de Confirmación */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => !loading && setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50 px-6">
          <View className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl">
            <Text className="text-3xl text-center mb-4">🍹</Text>
            <Text className="text-2xl font-bold text-center text-gray-800 mb-2">
              Confirmar Pedido
            </Text>
            <Text className="text-center text-gray-600 mb-6">
              Revisa los detalles de tu orden
            </Text>

            {/* Resumen del pedido */}
            <View className="bg-orange-50 rounded-2xl p-4 mb-6">
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Tipo:</Text>
                <Text className="font-semibold text-gray-800">
                  {punchType} - {alcohol}
                </Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Cantidad:</Text>
                <Text className="font-semibold text-gray-800">
                  {quantity} {quantity === "1" ? "botella" : "botellas"}
                </Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Cliente:</Text>
                <Text className="font-semibold text-gray-800">
                  {clientName}
                </Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Teléfono:</Text>
                <Text className="font-semibold text-gray-800">{phone}</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Tamaño:</Text>
                <Text className="font-semibold text-gray-800">{size}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Entrega:</Text>
                <Text className="font-semibold text-gray-800">{dueDate}</Text>
              </View>
            </View>

            {/* Botones */}
            <Pressable
              onPress={confirmOrder}
              disabled={loading}
              className={`py-4 rounded-2xl mb-3 ${
                loading ? "bg-gray-400" : "bg-orange-600"
              }`}
            >
              <Text className="text-center text-white font-bold text-base">
                {loading ? "Procesando..." : "Confirmar Pedido ✓"}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setModalVisible(false)}
              disabled={loading}
              className="py-4 rounded-2xl border-2 border-gray-300"
            >
              <Text className="text-center text-gray-700 font-semibold text-base">
                Cancelar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}