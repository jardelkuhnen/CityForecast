package br.com.hbsis;

import br.com.hbsis.dtos.CityForecastDTO;
import com.google.gson.Gson;
import com.thoughtworks.gauge.Step;
import org.springframework.http.*;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class CityController {

    @Step("Envia cidade name <cidadeSend> retorna forecast com nome cidade <cidadeReturn>")
    public void testForecastOk(String cidadeSend, String cidadeReturn) {

        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/json");

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity response = restTemplate.exchange("http://localhost:8080/api/city/forecast/" + cidadeSend, HttpMethod.GET, new HttpEntity(headers), String.class);

        Gson gson = new Gson();
        CityForecastDTO dto = gson.fromJson(response.getBody().toString(), CityForecastDTO.class);

        assertNotNull(dto);
        assertEquals(cidadeReturn, dto.getCity().getName());
        assertNotNull(dto.getList().get(0));

    }

    @Step("Envia cidade name <cidadeSend> return error")
    public void testeForecastError(String cidadeSend) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/json");

        RestTemplate restTemplate = new RestTemplate();


        try {
            restTemplate.exchange("http://localhost:8080/api/city/forecast/" + cidadeSend, HttpMethod.GET, new HttpEntity(headers), String.class);
        } catch (HttpServerErrorException e) {
            assertNotNull(e);
            assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, e.getStatusCode());
        }

    }


}
